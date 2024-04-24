import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { PCBViewer } from "../PCBViewer"

export const TraceErrorCircuit1: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <PCBViewer>
        <resistor
          name="R1"
          resistance="10k"
          x={-2}
          y={0}
          pcb_x={-2}
          pcb_y={1}
          footprint="0402"
        />
        <resistor
          name="R2"
          resistance="10k"
          x={2}
          y={0}
          pcb_x={2}
          pcb_y={0}
          footprint="0402"
          pcb_layer="bottom"
        />
        <trace from=".R1 > .right" to=".R2 > .left" />
      </PCBViewer>
    </div>
  )
}

export const TraceErrorCircuit2: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <PCBViewer>
        <resistor
          name="R1"
          resistance="10k"
          x={-2}
          y={0}
          pcb_x={-2}
          pcb_y={1}
          footprint="0402"
        />
        <resistor name="R2" resistance="10k" x={2} y={0} pcb_layer="bottom" />
        <trace from=".R1 > .right" to=".R2 > .left" />
      </PCBViewer>
    </div>
  )
}

const meta: Meta<typeof TraceErrorCircuit1> = {
  title: "TraceError",
  component: TraceErrorCircuit1,
}

export default meta
