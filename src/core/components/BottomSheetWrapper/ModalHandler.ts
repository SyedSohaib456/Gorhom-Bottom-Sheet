class ModalHandling {
    private isAnyModalVisibleAlready = false;
  
    private task: (() => void) | null = null;
  
    setIsAnyModalVisibleAlready = (value: boolean) => {
      this.isAnyModalVisibleAlready = value;
      if (!value) {
        setTimeout(() => {
          if (this.task) {
            this.task();
            this.task = null;
          }
        }, 1000);
      }
    };
  
    getIsAnyModalVisibleAlready = () => this.isAnyModalVisibleAlready;
  
    setTask = (callback: () => void) => {
      this.task = callback;
    };
  }
  export default new ModalHandling();