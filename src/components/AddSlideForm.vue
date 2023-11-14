<template>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <form action="" method="post" id="addSlide">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <input type="text" class="modal-title" id="slideModalLabel" placeholder="Add Title" required/>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="editor" class="summernote">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" :onclick="saveSlide">Save Slide</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: ['id', 'num'],
    methods: {
        async saveSlide(e) {
            e.preventDefault();
            
            let formData = new FormData();
            formData.append('title', document.getElementById("slideModalLabel").value);
            formData.append('projectId', this.id);
            formData.append('num', this.num);
            formData.append('content', document.querySelector('.note-editable.card-block').innerHTML);

            const res = await fetch(this.host + "/addSlide.php",
                {
                    body: formData,
                    method: "post",
                    credentials:"include"
                });
            console.log(await res.json());
            location.reload();
        }
    }
}
</script>