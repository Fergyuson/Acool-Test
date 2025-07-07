export type CalculatorType   = 'Landing' | 'E-commerce' | null
export type CalculatorCms    = 'Bitrix24' | 'WordPress'   | null
export type CalculatorDesign = 'Template'  | 'Custom'      | null
export type CalculatorTheme  = 'Business'  | 'Portfolio'   | null


export interface CalculatorOptions {
    type:    CalculatorType
    cms:     CalculatorCms
    design:  CalculatorDesign
    theme:   CalculatorTheme
    extras:  string[]
    comment: string
}
