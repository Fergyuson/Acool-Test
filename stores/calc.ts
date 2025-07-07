import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import type {
    CalculatorOptions,
    CalculatorType,
    CalculatorCms,
    CalculatorDesign,
    CalculatorTheme
} from '~/stores/section.types'


const defaultPrices = {
    type:   { Landing: 80000, 'E-commerce': 150000 } as Record<Exclude<CalculatorType, null>, number>,
    cms:    { Bitrix24: 60000, WordPress: 40000 }   as Record<Exclude<CalculatorCms, null>, number>,
    design: { Template: 0, Custom: 30000 }         as Record<Exclude<CalculatorDesign, null>, number>,
    theme:  { Business: 20000, Portfolio: 25000 }  as Record<Exclude<CalculatorTheme, null>, number>,
    extras: { SEO: 15000, Copywriting: 10000, Support: 5000 } as Record<string, number>
}

export const useCalculator = defineStore('calculator', () => {
    const options = reactive<CalculatorOptions>({
        type:    null,
        cms:     null,
        design:  null,
        theme:   null,
        extras:  [],
        comment: ''
    })

    const prices = reactive(defaultPrices)

    const total = computed(() => {
        let sum = 0

        if (options.type)   sum += prices.type[options.type]
        if (options.cms)    sum += prices.cms[options.cms]
        if (options.design) sum += prices.design[options.design]
        if (options.theme)  sum += prices.theme[options.theme]

        for (const extra of options.extras) {
            sum += prices.extras[extra] ?? 0
        }

        return sum
    })

    function reset() {
        options.type    = null
        options.cms     = null
        options.design  = null
        options.theme   = null
        options.extras  = []
        options.comment = ''
    }

    return {
        options,
        prices,
        total,
        reset
    }
})
