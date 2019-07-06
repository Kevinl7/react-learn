import React from 'react'
import SchemaForm, {
  FormButtonGroup,
  Field,
  Submit,
  FormItemGrid,
  FormCard,
  createFormActions
} from '@uform/antd'

const actions = createFormActions()

class Sys extends React.Component {
  
  state = {
    aa: '',
    bb: ''
  }



  handleClick = (values) => {
    console.log('w',this.state)
    
  }

  render () {
    return (
      <SchemaForm
        onSubmit={values=>this.handleClick(values)}
        effects={($) => {
          $('onFieldChange', 'aa').subscribe(fieldState => {
            this.setState({ aa: fieldState.value || ''})
          })
        }}>
        <FormItemGrid title="字段4" gutter={10} cols={[{xs:24, sm: 12 }, {xs:24, sm: 12 }]}>
        <Field name="aa" type="string" title="AA"/>
        <Field name="bb" type="string" title="f"/>
      </FormItemGrid>
        
        <FormButtonGroup>
            <Submit>提交</Submit>
        </FormButtonGroup>
      </SchemaForm>
    )
  }
}

export default Sys
