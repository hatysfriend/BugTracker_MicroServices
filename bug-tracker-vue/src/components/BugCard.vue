<template>
  <div id="bugCardContent" class="my-2">
    <li class="list-group-item">
        <div class="card">
            <div class="card-body card-custom-colour">
                <div class="row">
                    <button id="editButton" onclick="editClick(this.id)" bugid class="badge badge-light col-1 offset-11">
                        <span class="fa fa-edit"></span>
                    </button>
                    <div id="tagSection">
                    </div>
                </div>
                <br>
                <h5 id="bugCardTitle" class="card-title">
                </h5>
                <hr>
                <span id="commentCounter" class="far fa-comments mr-4"></span>
            </div>
        </div>
    </li>
</div>
</template>

<script>
export default {
};
</script>

<style>

</style>
