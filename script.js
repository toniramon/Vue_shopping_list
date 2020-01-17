var app = new Vue({
    el: '#app',
    data: {
        title: 'Shopping List',
        items: [
            {
                id: Math.ceil(Math.random() * 10000),
                name: 'test',
                quantity: 2,
                price: 3
            },
            {
                id: Math.ceil(Math.random() * 10000),
                name: 'test2222',
                quantity: 10,
                price: 5
            }
        ]
    }
})