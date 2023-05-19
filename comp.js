Vue.component('goods-list', {
    props: ['goods'],
    template: `
        <div class="goods-list d-flex flex-wrap justify-content-center">
            <goods-item v-for="good in goods" :good="good"></goods-item>
        </div>
    `
});

Vue.component('goods-item', {
    props: ['good'],
    template: `
        <div class="goods-item">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{good.product_name}}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">Цена: {{good.price}} р</p>                    
                </div>
            </div>
        </div>
    `
});
