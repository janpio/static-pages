class SidebarManager {
  isOpen = $state(false);

  toggle() {
    this.isOpen = !this.isOpen;
  }
}

export const sidebarManager = new SidebarManager();
