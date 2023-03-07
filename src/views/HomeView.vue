<template>
  <div class="home">
    <router-link to="/movie/tt6751668">
      <div class="poster-box">
        <img src="../assets/71222-Parasite-HD-Wallpaper.jpg" alt="Series Postr">
        <div class="detail">
          <h3>Parasite</h3>
          <p>Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.</p>
        </div>
      </div>
    </router-link>
    <form @submit.prevent= "searchMovie()" class="search-box">
        <input type="text" placeholder="What You Are Searching For ..." v-model="search">
        <input type="submit" placeholder="Search">
    </form>
    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID">
          <div class="img-box">
            <img :src="movie.Poster" :alt="movie.Title + 'poster'">
            <h4 class="type">{{ movie.Type }}</h4>
          </div>
          <div class="info">
            <h3 class="title">{{ movie.Title }}</h3>
            <h4 class="year">{{ movie.Year }}</h4>
          </div>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from "vue";
  export default {
    setup () {
      const search = ref("");
      const movies = ref([]);

      const searchMovie = () => {
        if (search.value != "") {
          fetch(`http://www.omdbapi.com/?apikey=82a62537&s=${search.value}`)
            .then(res => res.json())
            .then(data => {
            movies.value = data.Search;
          })
        }
      }

      return {
        search,
        movies,
        searchMovie
      }
    }
  }
</script>

<style lang="scss" scoped>
  .poster-box {
    position: relative;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 18px;
      color: #E9F8F9;
      background-color: rgba(24, 24, 35, 0.6);
      h3 {
        margin-bottom: 16px;
        font-weight: bold;
        font-size: 22px;
      }
      p {
        line-height: 1.7;
      }
    }
  }
  .search-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 18px;
    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;
      &[type="text"] {
        width: 100%;
        max-width: 600px;
        padding: 14px 22px;
        margin-bottom: 18px;
        background-color: rgba(24, 24, 35, 0.8);
        box-shadow: rgba(0, 0, 0, 0.2);
        border-radius: 0 16px 0 16px;
        font-size: 18px;
        color: #E9F8F9;
        transition: 0.3s;
        &:focus {
          background-color: rgba(24, 24, 35, 1);
          box-shadow: rgba(0, 0, 0, 0.3);
          border-radius: 16px 0px 16px 0;
        }
        &::placeholder {
          color: #E9F8F9;
        }
      }
      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: rgba(83, 127, 231, 1);
        box-shadow: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 14px;
        font-size: 20px;
        color: #E9F8F9;
        text-transform: uppercase;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
  .movies-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 8px;
    .movie {
      width: 100%;
      padding: 16px;
      border-radius: 10px;
      color: #E9F8F9;
      @media (min-width: 768px) and (max-width: 1199px){
        width: 50%;
      }
      @media (min-width: 1300px) {
        width: 25%;
      }
      @media (min-width: 1200px) and (max-width: 1299px) {
        width: 33%;
      }
      .img-box {
        position: relative;
        img {
        display: block;
        width: 100%;
        height: 350px;
        border-radius: 10px 10px 0 0;
        }
      .type {
        position: absolute;
        left: 0;
        bottom: 20px;
        padding: 12px;
        color: #E9F8F9;
        background-color: #537FE7;
        font-size: 18px;
        border-radius: 0 10px 10px 0;
        }
      }
      .info {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        min-height: 120px;
        background-color: #181823;
        color: #E9F8F9;
        padding: 10px 20px;
        border-radius: 0 0 10px 10px;
        .title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 16px;
      }
        .year {
          margin-bottom: 16px;
        }
      }
    }
  }
</style>