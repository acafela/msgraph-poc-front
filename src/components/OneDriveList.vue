<template>
    <ul id="driveItems">
        <li v-for="(driveItem,index) in driveItems" :key="index">
            <p>
                <img v-if="driveItem.isFolder" src="../assets/folder_icon.svg" class="icon"/>
                <img v-else src="../assets/txt_icon.svg" class="icon"/>
                <span v-text="driveItem.name"></span>
            </p>
        </li>
    </ul>
</template>

<script>
export default {
  name: "OneDriveList",
  data () {
    return {
      driveItems : []
    }
  },
  created() {
    this.axios.get("/me/drive/items/root/children")
    .then(res => { this.driveItems = res.data })
    .catch(e => { console.log("fail", e) })
  }
};
</script>

