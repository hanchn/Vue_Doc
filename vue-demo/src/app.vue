<style lang="less" scoped>
</style>
<template>
    <div>
        <h1 v-on:click="alertForm">{{text}}</h1>
        <input type="text" :value="text" @input="changeText">
        <ul>
            <li v-for="li in list" :key="li.id">{{li.text}}</li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: mapState({
    list: state => state.todo.list,
    text: state => state.todo.text
  }),
  methods: mapActions("todo", ["alertForm", "changeText"])
};
</script>