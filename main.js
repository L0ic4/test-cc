import promptSync from "prompt-sync";
import { displayMenu } from "./menu.js";

const prompt = promptSync();

export const riceCooker = {
  ricePresent: false,
  riceCooked: false,
  activeProcess: false,

  addRice() {
    if (!this.ricePresent) {
      this.ricePresent = true;
      console.log("Rice has been added.");
    } else {
      console.log("Rice cooker already has rice.");
    }
  },

  cookRice() {
    if (!this.ricePresent) {
      console.log("Cannot cook. Rice cooker is empty.");
    } else if (this.riceCooked || this.activeProcess) {
      console.log(
        this.riceCooked
          ? "Rice is already cooked."
          : "Process already in progress."
      );
    } else {
      console.log("Cooking rice...");
      this.delaySync(1500);
      this.riceCooked = true;
      this.activeProcess = false;
      console.log("The rice has been cooked!");
    }
  },

  steam() {
    if (!this.ricePresent) {
      console.log("Cannot steam. Rice cooker is empty.");
    } else if (this.activeProcess) {
      console.log("Process already in progress.");
    } else {
      console.log("Steaming in progress...");
      this.delaySync(1500);
      this.activeProcess = false;
      console.log("Steaming completed!");
    }
  },

  keepWarm() {
    if (!this.ricePresent) {
      console.log("Cannot keep warm. Rice cooker is empty.");
    } else if (!this.riceCooked) {
      console.log("Rice is not cooked.");
    } else if (this.activeProcess) {
      console.log("Process already in progress.");
    } else {
      console.log("The rice is now being kept warm.");
      this.activeProcess = true;
    }
  },

  removeRice() {
    if (this.ricePresent) {
      this.ricePresent = false;
      this.riceCooked = false;
      this.activeProcess = false;
      console.log("Rice has been removed.");
    } else {
      console.log("Rice cooker is empty.");
    }
  },

  delaySync(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {}
  },
};

export function simulateRiceCooker() {
  while (true) {
    displayMenu();
    let choice = +prompt("Enter your choice: ");

    switch (choice) {
      case 1:
        riceCooker.addRice();
        break;
      case 2:
        riceCooker.cookRice();
        break;
      case 3:
        riceCooker.steam();
        break;
      case 4:
        riceCooker.keepWarm();
        break;
      case 5:
        riceCooker.removeRice();
        break;
      case 6:
        console.log("Thank you for using the Rice Cooker Simulator. Goodbye!");
        return;
      default:
        console.log("Invalid choice. Please select a valid option.");
    }
  }
}

simulateRiceCooker();
