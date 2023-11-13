<template>
    <div>
        <div>
            Items per page : 
            <button class="btn" @click="decrementItemsPerPage">-</button>
            <span>{{ internalItemsPerPage }}</span>
            <button class="btn" @click="incrementItemsPerPage">+</button>
        </div>
        <div id="navigator" aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <a class="page-link" @click="changePage(currentPage - 1)" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: currentPage === page }">
                    <a class="page-link" @click="changePage(page)" href="#">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <a class="page-link" @click="changePage(currentPage + 1)" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {
    props: [
        'totalLength'
    ],
    data() {
        return {
            currentPage: 1,
            internalItemsPerPage: 5,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.totalLength / this.internalItemsPerPage);
        },
    },
    methods: {
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
                this.$emit('page-change',
                    this.internalItemsPerPage,
                    (page - 1) * this.internalItemsPerPage,
                );
            }
        },
        incrementItemsPerPage() {
            this.internalItemsPerPage++;
            this.changePage(1);
        },
        decrementItemsPerPage() {
            if (this.internalItemsPerPage > 1) {
                this.internalItemsPerPage--;
                this.changePage(1);
            }
        },
    },
};
</script>

<style scoped>

#navigator{
    margin: auto;
}
</style>
  