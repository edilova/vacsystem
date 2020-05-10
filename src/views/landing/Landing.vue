<template>
  <div>
    <div class="landing">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light py-3">
          <img class="landing-logo" src="./../../assets/landing/logo.png" alt="" width="40">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <!--            <li class="nav-item active">-->
              <!--              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
              <!--            </li>-->
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <button class="btn my-2 my-sm-0" type="submit" @click="gotoSystem">Войти в систему</button>
            </form>
          </div>
        </nav>

        <div class="block-1 row container d-flex align-items-center">
          <div class="col-8">
            <h1 class="main-title">Мониторинг процесса вакцинации скота</h1>
            <button class="btn text-uppercase my-4" type="submit" @click="downloadApp">Download app</button>
          </div>
        </div>
        <div class="block-2 container d-flex justify-content-center">
          <div class="block-2-bg">
            <div class="d-flex align-items-center">
              <img class="mr-3" src="../../assets/landing/Overline_white.png" alt="" width="25" height="25">
              <p class="m-0 text-uppercase">почему это так важно?</p>
            </div>
            <h3 class="w-75 pr-5 pt-3">Животноводство является важной отраслью сельского хозяйства, связанной с животными
              в Казахстане.</h3>
            <p class="pr-3">В настоящее время он производит 47% от общего объема продукции сельского хозяйства. Важность животноводства определяется большим влиянием на экономику</p>
          </div>
        </div>
        <div class="block-3 container">
          <div class="d-flex align-items-center">
            <img class="mr-3" src="../../assets/landing/Overline_dark.png" alt="" width="25" height="25">
            <p class="text-purple m-0 text-uppercase">наше влияние</p>
          </div>
          <h3 class="text-title-black pt-2 pb-3">Что мы могли бы улучшить с помощью этого приложения?</h3>
          <div class="row w-100 d-flex justify-content-between">
            <div class="col-4 pr-1">
              <div class="box  d-flex flex-column align-items-center justify-content-start">
                <img src="./../../assets/landing/landing_drop.png" alt="" width="70">
                <h5 class="m-0 text-center py-3">Улучшение иммунной системы животных</h5>
                <p class="text-center">Подготовьте животное для противостояния воздействия
                  патогенного микроорганизма, с которым оно может столкнуться в более позднем возрасте.</p>
              </div>
            </div>
            <div class="col-4">
              <div class="box  d-flex flex-column align-items-center justify-content-start">
                <img src="./../../assets/landing/landing_coronavirus.png" alt="" width="70">
                <h5 class="m-0 text-center py-3">Держит весь мир здоровым</h5>
                <p class="text-center">Правильная вакцинация защитит нашу планету и поможет предотвратить
                  появление вирусов, таких как COVID-19</p>
              </div>
            </div>
            <div class="col-4 pl-1">
              <div class="box d-flex flex-column align-items-center justify-content-start">
                <img src="./../../assets/landing/landing_list.png" alt="" width="70">
                <h5 class="m-0 text-center py-3">Здоровое питание</h5>
                <p class="text-center">Вакцины обеспечивают питание здоровой и питательной пищи,
                  такой как яйца, молоко и мясные продукты.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block-4 d-flex flex-column align-items-center justify-content-end">
        <div class="d-flex flex-column w-100 container">
          <div class="d-flex align-items-center">
            <img class="mr-3" src="../../assets/landing/Overline_white.png" alt="" width="25" height="25">
            <p class="m-0 text-uppercase">как?</p>
          </div>
          <h3 class="w-50 pr-5 pt-3">При реализации и проектировании аппаратного устройства, точнее,
            RFID-считывателя, было проведено множество сравнений материалов для получения наиболее удобного результата.</h3>
        </div>
        <div class="lil-app-download mx-auto d-flex align-items-center justify-content-between">
          <p class="m-0">Скачать приложение для обеспечения безопасности домашнего скота</p>
          <button class="text-uppercase">Download app</button>
        </div>
      </div>
      <div class="block-5 container row d-flex align-items-start justify-content-between m-auto">
        <div class="col-4 d-flex flex-column justify-content-start">
          <div class="d-flex align-items-center">
            <img class="mr-3" src="../../assets/landing/Overline_dark.png" alt="" width="25" height="25">
            <p class="text-purple m-0 text-uppercase">почему это так важно?</p>
          </div>
          <h3 class="pt-3">Отзывы</h3>
        </div>
        <div class="col-4">
          <div class="box d-flex flex-column justify-content-between">
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua. Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore.”</p>
            <div class="d-flex align-items-center">
              <img src="../../assets/landing/landing_avatar.png" alt="" width="50">
              <p class="pl-3 m-0">Назим бей</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="box d-flex flex-column justify-content-between">
            <p>“Отличная система! Животноводство является важной отраслью сельского хозяйства и нужно развиваться именно в этой отросли”</p>
            <div class="d-flex align-items-center">
              <img src="../../assets/landing/landing_avatar.png" alt="" width="50">
              <p class="pl-3 m-0">Мерарслан агай</p>
            </div>
          </div>
        </div>
      </div>
      <div class="block-6 container d-flex align-items-start justify-content-between m-auto">
        <div class="col-8 d-flex flex-column justify-content-between">
          <img src="../../assets/landing/logo.png" alt="" width="50">
          <p class="w-50 py-3">This is a blurb about the company sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua. </p>
          <div class="d-flex">
            <img class="mr-2" src="../../assets/landing/landing_facebook.svg" alt="">
            <img class="mr-2" src="../../assets/landing/landing_twitter.svg" alt="">
            <img class="mr-2" src="../../assets/landing/landing_instagram.svg" alt="">
            <img class="mr-2" src="../../assets/landing/landing_youtube.svg" alt="">
          </div>
        </div>
        <div class="col-4">
          <h4>КОНТАКТЫ</h4>
          <div class="d-flex align-items-center mb-3">
            <img class="mr-2" src="../../assets/landing/landing_place.svg" alt="">
            <p class="mb-0">Байзакова 250. Smart Point
              Алматы </p>
          </div>
          <div class="d-flex align-items-center mb-3">
            <img class="mr-2" src="../../assets/landing/landing_smartphone.svg" alt="">
            <p class="mb-0">+7 777 243 43 43</p>
          </div>
          <div class="d-flex align-items-center mb-3">
            <img class="mr-2" src="../../assets/landing/landing_email.svg" alt="">
            <p class="mb-0">Info@company.com</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer d-flex align-items-center">
      <div class="container d-flex justify-content-between">
        <p class="m-0">Tagline lorem ipsum dolor sit amet, consectetur adipiscing eiusmod</p>
        <p class="m-0">© 2020 Company.   Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Landing",
        methods: {
            gotoSystem() {
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped lang="scss">
  .landing {
    width: 100vw;
    height: 500vh;
    background-image: url('../../assets/landing/BG_landing_full.png');
    background-repeat: no-repeat;
  }
  .landing-logo {
    border-radius: 7px;
  }
  .btn {
    color: #ffffff;
    width: 12rem;
    height: 3rem;
    border-radius: 10px;
    border: none;
    font-weight: 900;
    background-color: #2D9CDB;
  }
  .block-1 {
    height: 70vh;
    .main-title {
      color: #ffffff;
      font-size: 3.5rem;
    }
  }
  .block-2 {
    height: 110vh;
  }
  .block-2-bg {
    background-image: url('../../assets/landing/BG_block_2.png');
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 10;
    position: absolute;
    width: 70%;
    height: 100vh;
    padding: 4rem;
    color: #fff;
    h3 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1rem;
    }
  }
  .block-3 {
    height: 30rem;
  }
  .text-purple {
    color: #5D62B5;
  }
  .text-title-black {
    font-weight: bold;
    font-size: 2rem;
  }
  .box {
    width: 100%;
    height: 20rem;
    background: #FFFFFF;
    border-radius: 20px;
    padding: 2.4rem;
    .img-block {
      height: 50%;
    }
    h5{
      color: #F2726F;
    }
  }
  .container {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  .block-4 {
    background-image: url('../../assets/landing/BG_block_4.png');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 10;
    position: relative;
    width: 100%;
    height: 100vh;
    color: #fff;
    h3 {
      font-size: 2rem;
      margin-bottom: 10rem;
    }
    p {
      font-size: 1rem;
    }
    .lil-app-download {
      width: 72%;
      height: 8rem;
      border-radius: 20px;
      background-color: #27476E;
      position: absolute;
      bottom: -4rem;
      padding-right: 5rem;
      padding-left: 5rem;
      p {
        font-weight: 900;
        font-size: 1.5rem;
        line-height: 30px;
      }
      button {
        width: 12rem;
        height: 3rem;
        border-radius: 10px;
        color: #ffffff;
        border: none;
        font-weight: 900;
        background-color: #2D9CDB;
      }
    }
  }
  .block-5 {
    height: 90vh;
    padding-top: 13rem;
    h3 {
      font-weight: bold;
      font-size: 2rem;
    }
  }
  .footer {
    width: 100vw;
    height: 5rem;
    background-color: #2D9CDB;
    z-index: 20;
    bottom: 0;
    color: #ffffff;
  }
</style>
