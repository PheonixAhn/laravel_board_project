<template>
<div class="my-3 p-3 bg-white rounded box-shadow">
    <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
    <div class="media text-muted pt-3">

        <div class="col-md-4">
            <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="https://sc3.locondo.jp/contents/commodity_image/CO/CO6840EU00011_1_m.jpg" alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                        This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">12 mins</small>
                    </div>
                </div>
            </div>
        </div>

        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">@username</strong>
        Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
        </p>
    </div>
    <small class="d-block text-right mt-3">
        <a href="#">All updates</a>
    </small>
</div>
</template>

<script>
    export default {mounted() {}}
</script>
