let interval
let defaultColor

const mouseover = event => {
    event.target.style.color = 'red'    
}
const mouseout = event => {
    event.target.style.color = defaultColor
}
export default {
    mounted(el, binding){
        console.log(el)
        console.log(binding)
        defaultColor = binding.value

        el.style[binding.arg] = binding.value
        if(binding.modifiers.blink){
            let flag = true
            interval = setInterval(()=>{
                // el.style.color = '#fff'
                el.style.color = flag ? '#fff' : binding.value
                flag = !flag
            }, 1000)
        }
        if(binding.modifiers.hover){
            el.addEventListener('mouseover', mouseover)
            el.addEventListener('mouseout', mouseout)
        }
    },
    unmounted(el, binding){
        if(interval){
            clearInterval(interval)
        }
        el.removeEventListener('mouseOver', mouseover)
        el.removeEventListener('mouseOut', mouseout)

    },
    updated(el, binding){
        console.log(el)
        console.log(binding)
        el.style[binding.arg] = binding.value
    }
}