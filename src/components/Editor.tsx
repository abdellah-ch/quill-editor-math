/* eslint-disable no-unused-vars */
import React from 'react'
import QuillEditor from './QuillEditor'
import { DeltaStatic, RangeStatic, BoundsStatic, Sources } from 'quill'

interface UnprivilegedEditor {
  getLength(): number
  getText(index?: number, length?: number): string
  getHTML(): string
  getBounds(index: number, length?: number): BoundsStatic
  getSelection(focus?: boolean): RangeStatic
  getContents(index?: number, length?: number): DeltaStatic
}
export interface IEditor {
  initialValue: string
  onChange?(
    value: string,
    delta: DeltaStatic,
    source: Sources,
    editor: UnprivilegedEditor
  ): void
  onBlur?(
    previousSelection: Range,
    source: Sources,
    editor: UnprivilegedEditor
  ): void
  placeholder?: string
  style?: React.CSSProperties
  theme?: string
  customOperator?: []
  toolbar?: []
}
const Editor: React.FC<IEditor> = (props) => {
  return <QuillEditor {...props} />
}

export default Editor
