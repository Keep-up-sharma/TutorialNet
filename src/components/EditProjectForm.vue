<template>
    <!-- Modal -->
    <div class="modal fade" id="projectEditModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="projectModalLabel">Update Project</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="projectEditForm" :action='this.host + "/editProject.php"' method="post"
                        enctype="multipart/form-data">
                        <div class="mb-3">
                            <label for="title" class="form-label">Title</label>
                            <input type="text" class="form-control" id="title" name="title" :value="project.title">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" :value="project.description"
                                name="description"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Category </label>
                            <select name="category" class="form-select" id="category">
                              <option v-for="cat in categories" :value="cat.name">{{ cat.name }}</option>
                            </select>
                          </div>
                        <div class="mb-3">
                            <label for="thumbnail" class="form-label">Thumbnail</label>
                            <input type="file" class="form-control" id="thumbnail" name="thumbnail">
                        </div>
                        <input type="hidden" id="projectId" name="projectId" :value="project.id">
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"
                        onclick="document.getElementById('projectEditForm').submit();">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'], data() {
        this.getCats();
        return { 'categories': [] }
    },

    methods: {
        async getCats() {
            let res = await fetch(this.host + '/' + 'getCategories.php');
            let json = await res.json();
            this.categories = json;
        }
    }
}

</script>