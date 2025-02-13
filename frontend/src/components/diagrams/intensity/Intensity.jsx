import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Text } from "recharts"
import { Wrapper } from "./IntensityStyle"
import { useEffect, useRef, useState } from "react"

function Intensity ({ userData }) {
    const graphicRef = useRef()
    const [graphicWidth, setGraphicWidth] = useState(0)

    const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
        return (
          <Text
            { ...rest }
            verticalAnchor="middle"
            y={ y + (y - cy) / 8 }
            x={ x + (x - cx) / 8 }
          >
            { payload.value }
          </Text>
        );
    }

    useEffect(() => {
        if (graphicRef.current) {
            setGraphicWidth(graphicRef.current.props.width)
        }
    }, [graphicRef.current])

    return (
        <Wrapper $height={ graphicWidth }>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="95%"
                    data={ userData.data }
                    style={{ backgroundColor: '#282D30' }}
                    ref={ graphicRef }
                    margin={{ left: 50, right: 50, top: 50, bottom: 50 }}
                >
                    <PolarGrid stroke="#FFF" radialLines={ false } />
                    <PolarAngleAxis dataKey="category" stroke="#FFF" tickLine={ false } tick={ props => renderPolarAngleAxis(props) }/>
                    <Radar dataKey="performanceValue" fill="rgba(255, 1, 1, 0.9)" fillOpacity={ 0.6 } />
                </RadarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}

export default Intensity