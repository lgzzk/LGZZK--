 <template>
  <a :href="href" target="_blank">
    <div id="friendInfo">
      <img :src="img" :alt=title>
      <span>{{title}}</span>
    </div>
  </a>
</template>

<script setup>

const props = defineProps({friend: Object})
const {href, img, title} = props.friend
</script>

<style scoped>
#friendInfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  transition: .2s ease;
  border-radius: 10px;
  background-color: rgba(254, 254, 254, 0);
}

#friendInfo:hover{
  transform: scale(1.4);
  box-shadow: 0px 0px 10px rgb(33, 33, 33);
}

img{
  width: 100px;
  transition: 7s;
  border-radius: 300px;
}

span{
  color: #ffffff;
  margin: 10px 0px;
  font-size: 30px;
  font-weight: 1000;
}
</style>