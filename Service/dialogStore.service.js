// stores/dialogStore.js
import { defineStore } from "pinia";

export const useDialogStore = defineStore("dialog", {
  state: () => ({
    visible: false, // สถานะสำหรับเปิด/ปิด Dialog
    model: false, // สถานะสำหรับเปิด/ปิด Dialog
  }),
  actions: {
    openDialog() {
      this.visible = true;
    },
    closeDialog() {
      this.visible = false;
    },
    modelOPen() {
      this.model = true;
    },
    close() {
      this.model = false;
    },
  },
});
