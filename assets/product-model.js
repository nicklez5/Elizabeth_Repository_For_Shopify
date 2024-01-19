class ProductModel extends HTMLElement {
    constructor(){
        super();
        this.openModelModal();
    }

    openModelModal(){
        console.log("The element is working");
    }
}

const productModel = customElements.define('product-model', ProductModel);
