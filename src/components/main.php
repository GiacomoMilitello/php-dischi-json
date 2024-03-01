<main>
    <div class="container">
        <div class="row p-4">
            <div v-for="(element, index) in dischi" :key="index" class="col-4 mb-4">
                <div class="card">
                    <img :src="element.poster" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h4 class="card-title">{{ element.title }}</h4>
                        <p class="card-text">{{ element.author }}</p>
                        <p class="card-text fw-bold">{{ element.year }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>