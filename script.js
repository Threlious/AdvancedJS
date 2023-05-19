const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: ''
    },
    methods: {
        makeGETRequest(url, callback) {
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
            xhr.open('GET', url, true);
            xhr.send();
        },    

        filterGoods(value) {
            const regexp = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter(good =>
                regexp.test(good.product_name));
        },
        searchHandler() {
            this.filterGoods(document.querySelector('#search_input').value)
        }
    },

    mounted() {
        this.makeGETRequest('/catalogData', (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
        });
    }
});
