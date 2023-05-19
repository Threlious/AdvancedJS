const GoodList = Vue.component('goods-list', {
    props: ['goods'],
    template: `
        <div class="goods-list d-flex flex-wrap justify-content-center">
            <goods-item v-for="good in goods" :good="good"></goods-item>
        </div>
    `
});

const GoodItem = Vue.component('goods-item', {
    props: ['good'],
    methods: {
        makePOSTRequest(url, data, callback) {
            let xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            xhr.send(data);
        },
        addToCart() {
            this.makePOSTRequest('/addToCart', JSON.stringify(this.good))
        }
    },
    template: `
        <div class="goods-item">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{good.product_name}}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">Цена: {{good.price}} р</p>
                    <button class="btn btn-outline-secondary" @click="addToCart">Добавить</button>                  
                </div>
            </div>
        </div>
    `
});
