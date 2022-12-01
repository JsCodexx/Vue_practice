const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'The  Empire', author: 'Brandon Sandarson',image: '/assets/1.jpg' , isFav:true},
                { title: 'The Final ', author: 'Brad' ,image: '/assets/1.jpg' , isFav:false },
                { title: 'The Final Empire', author: 'TOM' ,image: '/assets/1.jpg' , isFav:true },
            ],
            url: 'http://www.google.com',

            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handelEvents(e) {
            console.log(e, e.type)
        },
        handelMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY

        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    }
})
app.mount('#app')
