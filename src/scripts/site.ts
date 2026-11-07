// Petits utilitaires partagés entre la nav, la palette de commandes et les sections.

export function currentTheme(): "light" | "dark" {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function setTheme(theme: "light" | "dark") {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {}
  window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
}

export function toggleTheme() {
  setTheme(currentTheme() === "dark" ? "light" : "dark");
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/** Filtre les projets par techno. null = tout afficher. */
export function filterProjects(tech: string | null, scroll = false) {
  window.dispatchEvent(new CustomEvent("filter-tech", { detail: tech }));
  if (scroll) document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" });
}

/** Affiche un court message flottant en bas de l'écran */
export function toast(message: string) {
  let el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("show");
  clearTimeout((el as any)._t);
  (el as any)._t = setTimeout(() => el!.classList.remove("show"), 1800);
}
