<template>
  <div class="info"> 
    <div class="box">
      <img :src="movie.Poster" :alt="movie.Title + 'Poster'">
      <h2>{{ movie.Title }}</h2>
    </div>
    <div class="detail-box">
      <h4 class="year"><span>Year:</span> {{ movie.Year }}</h4>
      <h4 class="genre"><span>Genre:</span> {{ movie.Genre }}</h4>
      <h4 class="rated"><span>Rated:</span> {{ movie.Rated }}</h4>
      <h4 class="Release"><span>Release:</span> {{ movie.Released }}</h4>
      <h4 class="country"><span>Country:</span> {{ movie.Country }}</h4>
      <h4 class="lang"><span>Language:</span> {{ movie.Language }}</h4>
      <h4 class="time"><span>Runtime:</span> {{ movie.Runtime }}</h4>
      <h4 class="dvd"><span>DVD:</span> {{ movie.DVD }}</h4>
      <div class="rating">
        <h4><span>Ratings:</span> </h4>
        <div class="imdb">
          <h4 class="name"><span>{{ movie.Ratings[0].Source }}:</span> {{ movie.Ratings[0].Value }}</h4>
          <h4 class="vote"><span>Number Of Votes:</span> {{ movie.imdbVotes }}</h4>
        </div>
        <div class="tomatoe">
          <h4 class="name"><span>{{ movie.Ratings[1].Source }}:</span> {{ movie.Ratings[1].Value }}</h4>
        </div>
      </div>
    </div>
    <p><span>The Full Plot</span>{{ movie.Plot }}</p>
    <div class="awards-box">
      <h4 class="awards"><span>Awards:</span> {{ movie.Awards }}</h4>
      <h4 class="box-office"><span>BoxOffice:</span> {{ movie.BoxOffice }}</h4>
    </div>
    <div class="cast">
      <h4 class="directed"><span>Directed By:</span> {{ movie.Director }}</h4>
      <h4 class="Written"><span>Written By:</span> {{ movie.Writer }}</h4>
      <h4 class="actors"><span>Actors:</span> {{ movie.Actors }}</h4>
    </div>
  </div>
</template>

<script>
  import { ref, onBeforeMount } from "vue";
  import { useRoute } from "vue-router";
  
  export default {
    setup () {
      const movie = ref({});
      const route = useRoute();
      onBeforeMount(() => {
        fetch(`http://www.omdbapi.com/?apikey=82a62537&i=${route.params.id}&plot=full`)
          .then(res => res.json())
          .then(data => {
            movie.value = data;
            console.log(movie.value)
          })
      })

      return {
        movie
      }
    }
  }
</script>
<style lang="scss" scoped>
  .info {
    margin: 16px;
    padding: 20px 0;
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      h2 {
        width: 50%;
        color: #181823;
        padding-left: 20px;
        font-size: 30px;
    }
      img {
        display: block;
        width: 50%;
        border-radius: 10px;
        margin-bottom: 16px;
      }
    }
      .detail-box {
        padding: 16px;
        background-color: #181823;
        border-radius: 10px;
        margin-bottom: 16px;
        h4 {
          color: #E9F8F9;
          margin-bottom: 16px;
          span {
            color: #537FE7;
          }
        }
        .rating {
          font-size: 14px;
          > h4 {
            font-size: 16px;
          }
          .name,
          .vote {
            span {
              color: #537FE7;
            }
          }
        }
      }
      p {
        color: #E9F8F9;
        padding: 16px;
        background-color: #181823;
        border-radius: 10px;
        margin-bottom: 16px;
        line-height: 1.7;
        span {
          display: block;
          font-size: 24px;
          margin-bottom: 10px;
          color: #537FE7;
        }
      }
      .awards-box, .cast {
        padding: 16px;
        background-color: #181823;
        border-radius: 10px;
        margin-bottom: 16px;
        h4 {
          color: #E9F8F9;
          margin-bottom: 16px;
          span {
            color: #537FE7;
          }
        }
      }
  }
</style>