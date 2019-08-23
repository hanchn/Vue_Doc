let state = {
    text: 'Hello World !',
    list: [{
        id: 0,
        text: 'test0',
    }, {
        id: 1,
        text: 'test1',
    }, {
        id: 2,
        text: 'test2',
    }, {
        id: 3,
        text: 'test3',
    }, {
        id: 4,
        text: 'test4',
    }]
}

export default {
    state,
    getters: {},
    mutations: {
        changeText(state, newText) {
            console.log('newText', newText)
            state.text = newText
        }
    },
    actions: {
        changeText({
            commit
        }, e) {
            commit('changeText', e.target.value)
        },
        alertForm() {
            alert('弹出弹框！')
        }
    },
    namespaced: true
}