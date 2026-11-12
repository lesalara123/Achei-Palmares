(function () {
  "use strict";

  var storageKey = "achei-palmares-data";
  var defaultData = {
    categories: ["Alimentacao", "Casa", "Beleza", "Servicos"],
    establishments: [
      { id: "est-1", name: "Mercado Central", address: "Rua da Matriz, 120 - Centro", hours: "Seg a sab, 8h as 19h", phone: "(81) 99999-1001", active: true },
      { id: "est-2", name: "Studio Raizes", address: "Av. Sul, 455 - Sao Jose", hours: "Ter a sab, 9h as 18h", phone: "(81) 98888-2040", active: true },
      { id: "est-3", name: "Conserta Palmares", address: "Rua do Comercio, 78 - Centro", hours: "Seg a sex, 8h as 17h", phone: "(81) 97777-3020", active: true }
    ],
    items: [
      { id: "item-1", name: "Bolos caseiros", type: "Produto", category: "Alimentacao", establishmentId: "est-1", description: "Bolos frescos para cafe da manha e encomendas.", active: true },
      { id: "item-2", name: "Corte e escova", type: "Servico", category: "Beleza", establishmentId: "est-2", description: "Atendimento com hora marcada para corte e escova.", active: true },
      { id: "item-3", name: "Conserto de celulares", type: "Servico", category: "Servicos", establishmentId: "est-3", description: "Diagnostico e reparo de aparelhos celulares.", active: true },
      { id: "item-4", name: "Produtos de limpeza", type: "Produto", category: "Casa", establishmentId: "est-1", description: "Itens para limpeza domestica e institucional.", active: true }
    ]
  };

  var data = loadData();
  var state = { query: "", category: "", adminTab: "establishments", authenticated: false };
  var elements = {
    searchForm: document.querySelector("#search-form"),
    searchInput: document.querySelector("#search-input"),
    categoryFilter: document.querySelector("#category-filter"),
    resultsGrid: document.querySelector("#results-grid"),
    emptyState: document.querySelector("#empty-state"),
    resultsCount: document.querySelector("#results-count"),
    loginDialog: document.querySelector("#login-dialog"),
    loginForm: document.querySelector("#login-form"),
    detailDialog: document.querySelector("#detail-dialog"),
    adminView: document.querySelector("#admin-view"),
    main: document.querySelector("main")
  };

  function loadData() {
    try {
      var saved = JSON.parse(localStorage.getItem(storageKey));
      return saved && saved.categories && saved.establishments && saved.items ? saved : clone(defaultData);
    } catch (error) {
      return clone(defaultData);
    }
  }

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function saveData() { localStorage.setItem(storageKey, JSON.stringify(data)); }
  function normalize(value) { return String(value || "").toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, ""); }
  function escapeHtml(value) { return String(value || "").replace(/[&<>'"]/g, function (char) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" })[char]; }); }
  function getEstablishment(id) { return data.establishments.find(function (item) { return item.id === id; }); }
  function activeItems() { return data.items.filter(function (item) { var establishment = getEstablishment(item.establishmentId); return item.active && establishment && establishment.active; }); }
  function createId(prefix) { return prefix + "-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  function populateCategories() {
    var current = elements.categoryFilter.value;
    elements.categoryFilter.innerHTML = "<option value=''>Todas as categorias</option>" + data.categories.map(function (category) { return "<option value='" + escapeHtml(category) + "'>" + escapeHtml(category) + "</option>"; }).join("");
    elements.categoryFilter.value = data.categories.indexOf(current) >= 0 ? current : "";
    renderStats();
  }

  function renderStats() {
    document.querySelector("#stat-establishments").textContent = data.establishments.filter(function (item) { return item.active; }).length;
    document.querySelector("#stat-items").textContent = activeItems().length;
  }

  function getResults() {
    var query = normalize(state.query);
    return activeItems().filter(function (item) {
      var establishment = getEstablishment(item.establishmentId);
      var text = normalize(item.name + " " + item.type + " " + item.category + " " + establishment.name);
      return (!query || text.indexOf(query) >= 0) && (!state.category || item.category === state.category);
    });
  }

  function renderResults() {
    var results = getResults();
    elements.resultsCount.textContent = results.length + (results.length === 1 ? " resultado" : " resultados");
    elements.resultsGrid.innerHTML = results.map(function (item) {
      var establishment = getEstablishment(item.establishmentId);
      return "<article class='result-card'><div class='card-top'><span class='category-pill'>" + escapeHtml(item.category) + "</span><span aria-hidden='true'>↗</span></div><h3>" + escapeHtml(item.name) + "</h3><p class='item-type'>" + escapeHtml(item.type) + "</p><p class='card-detail'><span>●</span>" + escapeHtml(establishment.name) + "</p><p class='card-detail'><span>⌖</span>" + escapeHtml(establishment.address) + "</p><div class='card-actions'><button class='button button-secondary button-small' type='button' data-detail-id='" + item.id + "'>Ver detalhes</button><a class='button button-primary button-small' target='_blank' rel='noreferrer' href='https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(establishment.address + ", Palmares, PE") + "'>Abrir rota</a></div></article>";
    }).join("");
    elements.emptyState.hidden = results.length > 0;
  }

  function openDetails(itemId) {
    var item = data.items.find(function (entry) { return entry.id === itemId; });
    var establishment = item && getEstablishment(item.establishmentId);
    if (!item || !establishment) return;
    elements.detailDialog.innerHTML = "<div class='detail-content'><form method='dialog'><button class='dialog-close' type='submit' aria-label='Fechar'>×</button></form><p class='eyebrow'>" + escapeHtml(item.category) + "</p><h2>" + escapeHtml(item.name) + "</h2><p class='item-type'>" + escapeHtml(item.type) + " oferecido por " + escapeHtml(establishment.name) + "</p><ul class='detail-list'><li><strong>Sobre</strong><span>" + escapeHtml(item.description) + "</span></li><li><strong>Endereco</strong><span>" + escapeHtml(establishment.address) + "</span></li><li><strong>Horario</strong><span>" + escapeHtml(establishment.hours) + "</span></li><li><strong>Contato</strong><span>" + escapeHtml(establishment.phone) + "</span></li></ul><a class='button button-primary button-wide' target='_blank' rel='noreferrer' href='https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(establishment.address + ", Palmares, PE") + "'>Abrir localizacao</a></div>";
    elements.detailDialog.showModal();
  }

  function showToast(message) {
    var toast = document.querySelector("#toast");
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(function () { toast.classList.remove("is-visible"); }, 2800);
  }

  function renderAdmin() {
    renderEstablishmentsPanel();
    renderItemsPanel();
    renderCategoriesPanel();
    document.querySelectorAll("[data-admin-tab]").forEach(function (button) { button.classList.toggle("is-active", button.dataset.adminTab === state.adminTab); });
    document.querySelectorAll(".admin-panel").forEach(function (panel) { panel.hidden = panel.id !== "admin-" + state.adminTab; });
  }

  function renderEstablishmentsPanel() {
    var panel = document.querySelector("#admin-establishments");
    panel.innerHTML = "<div class='admin-panel-header'><div><h2>Estabelecimentos</h2><p>" + data.establishments.length + " registros cadastrados</p></div><button class='button button-primary button-small' data-admin-action='add-establishment'>+ Novo</button></div><div class='admin-list'>" + (data.establishments.length ? data.establishments.map(function (item) { return "<div class='admin-row'><div><strong>" + escapeHtml(item.name) + "</strong><small>" + escapeHtml(item.address) + " · " + (item.active ? "Ativo" : "Inativo") + "</small></div><div class='row-actions'><button data-admin-action='toggle-establishment' data-id='" + item.id + "'>" + (item.active ? "Desativar" : "Ativar") + "</button><button class='danger' data-admin-action='delete-establishment' data-id='" + item.id + "'>Excluir</button></div></div>"; }).join("") : "<p class='admin-empty'>Nenhum estabelecimento cadastrado.</p>") + "</div>";
  }

  function renderItemsPanel() {
    var panel = document.querySelector("#admin-items");
    panel.innerHTML = "<div class='admin-panel-header'><div><h2>Produtos e servicos</h2><p>Itens que aparecem na busca publica</p></div><button class='button button-primary button-small' data-admin-action='add-item'>+ Novo</button></div><div class='admin-list'>" + (data.items.length ? data.items.map(function (item) { var establishment = getEstablishment(item.establishmentId); return "<div class='admin-row'><div><strong>" + escapeHtml(item.name) + "</strong><small>" + escapeHtml(item.category) + " · " + escapeHtml(establishment ? establishment.name : "Sem estabelecimento") + "</small></div><div class='row-actions'><button data-admin-action='toggle-item' data-id='" + item.id + "'>" + (item.active ? "Desativar" : "Ativar") + "</button><button class='danger' data-admin-action='delete-item' data-id='" + item.id + "'>Excluir</button></div></div>"; }).join("") : "<p class='admin-empty'>Nenhum item cadastrado.</p>") + "</div>";
  }

  function renderCategoriesPanel() {
    var panel = document.querySelector("#admin-categories");
    panel.innerHTML = "<div class='admin-panel-header'><div><h2>Categorias</h2><p>" + data.categories.length + " categorias disponiveis</p></div></div><form class='inline-form' id='category-form'><input name='name' placeholder='Nova categoria' required><button class='button button-primary button-small'>Adicionar</button></form><div class='admin-list'>" + data.categories.map(function (category) { return "<div class='admin-row'><div><strong>" + escapeHtml(category) + "</strong><small>Disponivel no filtro publico</small></div><div class='row-actions'><button class='danger' data-admin-action='delete-category' data-category='" + escapeHtml(category) + "'>Excluir</button></div></div>"; }).join("") + "</div>";
  }

  function addEstablishment() {
    var name = window.prompt("Nome do estabelecimento:");
    if (!name) return;
    var address = window.prompt("Endereco:");
    if (!address) return;
    data.establishments.push({ id: createId("est"), name: name.trim(), address: address.trim(), hours: "A definir", phone: "A informar", active: true });
    saveData(); renderAdmin(); populateCategories(); renderResults(); showToast("Estabelecimento adicionado.");
  }

  function addItem() {
    if (!data.establishments.length || !data.categories.length) { showToast("Cadastre estabelecimento e categoria primeiro."); return; }
    var name = window.prompt("Nome do produto ou servico:");
    if (!name) return;
    var establishment = window.prompt("Digite o nome exato do estabelecimento:\n" + data.establishments.map(function (item) { return item.name; }).join("\n"));
    var selected = data.establishments.find(function (item) { return normalize(item.name) === normalize(establishment); });
    if (!selected) { showToast("Estabelecimento nao encontrado."); return; }
    data.items.push({ id: createId("item"), name: name.trim(), type: "Produto", category: data.categories[0], establishmentId: selected.id, description: "Informacao a complementar.", active: true });
    saveData(); renderAdmin(); populateCategories(); renderResults(); showToast("Item adicionado.");
  }

  function handleAdminAction(action, id, category) {
    if (action === "add-establishment") return addEstablishment();
    if (action === "add-item") return addItem();
    if (action === "toggle-establishment") { var establishment = getEstablishment(id); establishment.active = !establishment.active; }
    if (action === "toggle-item") { var item = data.items.find(function (entry) { return entry.id === id; }); item.active = !item.active; }
    if (action === "delete-establishment" && window.confirm("Excluir este estabelecimento e seus itens?")) { data.items = data.items.filter(function (item) { return item.establishmentId !== id; }); data.establishments = data.establishments.filter(function (item) { return item.id !== id; }); }
    if (action === "delete-item" && window.confirm("Excluir este item?")) data.items = data.items.filter(function (item) { return item.id !== id; });
    if (action === "delete-category" && window.confirm("Excluir esta categoria?")) { data.categories = data.categories.filter(function (item) { return item !== category; }); data.items.forEach(function (item) { if (item.category === category) item.category = data.categories[0] || "Sem categoria"; }); }
    saveData(); renderAdmin(); populateCategories(); renderResults(); showToast("Dados atualizados.");
  }

  elements.searchForm.addEventListener("submit", function (event) { event.preventDefault(); state.query = elements.searchInput.value.trim(); state.category = elements.categoryFilter.value; renderResults(); document.querySelector("#results-title").scrollIntoView({ behavior: "smooth", block: "start" }); });
  elements.categoryFilter.addEventListener("change", function () { state.category = elements.categoryFilter.value; renderResults(); });
  document.addEventListener("click", function (event) {
    var actionButton = event.target.closest("[data-action]");
    var detailButton = event.target.closest("[data-detail-id]");
    var adminButton = event.target.closest("[data-admin-action]");
    var tabButton = event.target.closest("[data-admin-tab]");
    if (actionButton && actionButton.dataset.action === "open-login") elements.loginDialog.showModal();
    if (actionButton && actionButton.dataset.action === "clear-search") { elements.searchInput.value = ""; elements.categoryFilter.value = ""; state.query = ""; state.category = ""; renderResults(); }
    if (actionButton && actionButton.dataset.action === "logout") { state.authenticated = false; elements.adminView.hidden = true; elements.main.hidden = false; window.location.hash = "inicio"; showToast("Sessao encerrada."); }
    if (detailButton) openDetails(detailButton.dataset.detailId);
    if (tabButton) { state.adminTab = tabButton.dataset.adminTab; renderAdmin(); }
    if (adminButton) handleAdminAction(adminButton.dataset.adminAction, adminButton.dataset.id, adminButton.dataset.category);
  });
  elements.loginForm.addEventListener("submit", function (event) { event.preventDefault(); var password = document.querySelector("#login-password").value; if (password !== "achei123") { showToast("Senha demonstrativa incorreta."); return; } elements.loginDialog.close(); state.authenticated = true; elements.main.hidden = true; elements.adminView.hidden = false; renderAdmin(); window.location.hash = "admin"; showToast("Bem-vindo ao painel administrativo."); });
  document.addEventListener("submit", function (event) { if (event.target.id !== "category-form") return; event.preventDefault(); var name = event.target.elements.name.value.trim(); if (!name || data.categories.some(function (category) { return normalize(category) === normalize(name); })) { showToast("Digite uma categoria nova."); return; } data.categories.push(name); saveData(); renderAdmin(); populateCategories(); showToast("Categoria adicionada."); });

  populateCategories();
  renderResults();
}());