<template>
    <section class="content">
        <div class="container">
            <div class="content__info">
                <span class="content__info-degree"> {{ getTemp }}° <small>Сегодня</small></span>
                <p class="content__info-time">Время: {{ getTime }}</p>
                <p class="content__info-city">Город: <span>{{ weatherDB?.name }}</span></p>
                <img :src="getIcon" alt="" class="content__info-icon">
            </div>
            <div class="content__desc">
                <div class="content__desc-item">
                    <img src="../../assets/images/temp.svg" alt="">
                    <span class="content__desc-span">Температура</span>
                    <p class="content__desc-txt">{{ getTemp }} - ощущается как {{ Math.round(this.weatherDB?.current?.feels_like) }}</p>
                </div>
                <div class="content__desc-item">
                    <img src="../../assets/images/davlenie.svg" alt="">
                    <span class="content__desc-span">Давление</span>
                    <p class="content__desc-txt">765 мм ртутного столба - нормальное</p>
                </div>
                <div class="content__desc-item">
                    <img src="../../assets/images/osadki.svg" alt="">
                    <span class="content__desc-span">Осадки</span>
                    <p class="content__desc-txt">Без осадков</p>
                </div>
                <div class="content__desc-item">
                    <img src="../../assets/images/wind.svg" alt="">
                    <span class="content__desc-span">Ветер</span>
                    <p class="content__desc-txt">3 м/с юго-запад - легкий ветер</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { weatherIcons } from '@/icons';
import { mapState } from 'vuex';

export default {
    name: "MainContent",
    computed: {
        ...mapState(['weatherDB']),
        getTemp() {
            return Math.round(this.weatherDB?.current?.temp)
        },
        getTime() {
            return new Date().toLocaleString('en-Us', {
                timeZone: this.weatherDB?.timezone,
                timeStyle: 'short',
                hourCycle: "h23"
            })
        },
        getIcon() {
            return weatherIcons[this.weatherDB?.current?.weather[0]?.description] || weatherIcons['ясно']
        }
    }
}

</script>