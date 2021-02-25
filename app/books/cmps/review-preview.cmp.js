export default {
    props: ['review'],
    template: `
    <section class="review-preview">
        <div class="review-details">
            <h2>{{review.fullName}}</h2>
            <div class="date-rate">
            <div>Date: {{review.date}}</div>
            <div>Rating:{{review.rating}}</div>
            </div>
        </div>
        <div>{{review.userReview}}</div>
    </section>
    `,
}

