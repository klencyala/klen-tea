class KlenTea {
    constructor(teaType) {
      this.teaType = teaType;
      this.isBrewed = false;
    }
    brew() {
      console.log(`Brewing a cup of ${this.teaType} klen tea using the secret klen method.`);
      setTimeout(() => {
        this.isBrewed = true;
        console.log(`Your mysterious ${this.teaType} klen tea is ready!`);
      }, 6000); // Simulate a 6-second brewing time
    }
  
    addSecretIngredient(ingredient) {
      console.log(`Adding the secret ingredient of ${ingredient} to enhance your klen tea.`);
    }
  
    enjoy() {
      if (this.isBrewed) {
        console.log(`Sipping on the unique flavor of ${this.teaType} klen tea. A truly klen-tastic experience!`);
      } else {
        console.log('Your klen tea is not brewed yet. Please wait for the brewing process to complete.');
      }
    }
  }
  
  // Example usage:
  const myKlenTea = new KlenTea('Green');
  myKlenTea.brew();
  myKlenTea.addSecretIngredient('Moonlight Essence');
  setTimeout(() => myKlenTea.enjoy(), 7000); // Enjoy after 7 seconds
  