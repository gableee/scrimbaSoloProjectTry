const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const postSectionEl = document.querySelector(".post-section")
const ownerProfileEl = document.querySelector(".owner-profile")
const userProfileAvatarEl = document.getElementById("user-profile-avatar")
const userNameEl = document.querySelector(".user-name")
const userAddressEl = document.querySelector(".user-address")
const postContentEl = document.querySelector("content-cont")
const heartEl = document.querySelector(".fa-heart")
const commentEl = document.querySelector(".fa-comment")
const paperPlaneEl = document.querySelector(".fa-paper-plane")
const likesCountEl = document.querySelector(".likes-count")
const commentSectionEl = document.querySelector(".comment-section")

posts.forEach(posts => {
const postInTheOldgram = `<section class="post-section">
                <div class="post-content-container">
                    <div class="user-account">
                        <div class="user-avatar-cont">
                            <img src="${posts.avatar}" alt="User account profile"     id="user-profile-avatar">
                        </div>
                        <div class="user-details-container">
                            <p class="user-name bold">${posts.name}</p>
                            <p class="user-address">${posts.location}</p>
                        </div>
                    </div>
                    
                    <div class="content-cont">
                        <img src="${posts.post}" alt="${posts.name} picture" class="content" id="post-content">
                    </div>
                    
                    <div class="icons">
                        <ul>
                            <li><i class="fa-regular fa-heart heart-icon"></i></li>
                            <li><i class="fa-regular fa-comment"></i><li>
                            <li><i class="fa-regular fa-paper-plane"></i><li>
                        <ul>
                    </div>
                    <div class="likes-section">
                        <p class="likes-count bold">${posts.likes} likes</p>
                        <p class="comment-section"><span class="bold">${posts.username}</span> ${posts.comment}</p>
                    </div>
                </div>
            </section>
            <div class="divider"></div>`
            
            
            // Append each post and divider to the container
            document.querySelector(".container").insertAdjacentHTML("beforeend", postInTheOldgram);
    })


/*---------Heart :Hover, :Active, Clicked state ---------*/

document.querySelectorAll(".heart-icon").forEach((heartIcon) => {
    let isLiked = false;

    heartIcon.addEventListener("mouseenter", (e) => {
    if (!isLiked) { // Hover Only
        heartIcon.classList.replace("fa-regular", "fa-solid");
        heartIcon.style.color = "rgba(255, 0, 0, 0.6)";
        }
    });

    heartIcon.addEventListener("mouseleave", (e) => {
        if (!isLiked) { // Hover is remove without clicking
            heartIcon.classList.replace("fa-solid", "fa-regular");
            heartIcon.style.color = "black";
        }
    });

    heartIcon.addEventListener("click", (e) => {  // the heart is Clicked
        const postContainer = heartIcon.closest(".post-content-container");
        const likesCountEl = postContainer.querySelector(".likes-count");
        const currentLikes = parseInt(likesCountEl.textContent);
        isLiked = !isLiked; // False
            if (isLiked) {
                heartIcon.classList.replace("fa-regular", "fa-solid");
                heartIcon.style.color = "red"; // Turn to red
                likesCountEl.textContent = `${currentLikes + 1} likes`; // Increment likes
            } else {
                heartIcon.classList.replace("fa-solid", "fa-regular");
                heartIcon.style.color = "black"; // Back to default
                likesCountEl.textContent = `${currentLikes - 1} likes`; // Decrement likes
            }
        });

        // Event delegation for double-clicking on post content
    document.querySelector(".container").addEventListener("dblclick", (e) => {
        // Check if the double-clicked element is a post image
        if (e.target.classList.contains("content")) {
            // Find the corresponding heart icon in the same post
            const postContainer = e.target.closest(".post-content-container");
            const heartIcon = postContainer.querySelector(".heart-icon");

            // Change the heart icon to "liked" state
            heartIcon.classList.replace("fa-regular", "fa-solid");
            heartIcon.style.color = "red";
            isLiked = true; // Set isLiked to true
        }
    }); 
})
/*-------------------------------------------------------- */

