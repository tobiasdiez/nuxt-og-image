import type { VNode } from '../../../../../types'
import { defineSatoriTransformer } from '../utils'
import { decodeHtml } from '../../../utils-pure'

// automatically add missing flex rules
export default defineSatoriTransformer(() => {
  return {
    filter: (node: VNode) => typeof node.props?.children === 'string',
    transform: async (node: VNode) => {
      // for the payload, we unencode any html
      // unescape all html tokens
      node.props.children = decodeHtml(node.props.children as string)
    },
  }
})
