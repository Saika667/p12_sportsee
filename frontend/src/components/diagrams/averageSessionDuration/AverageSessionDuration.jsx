import { XAxis, YAxis, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts'
import { Wrapper } from './AverageSessionDurationStyle'
import { useEffect, useRef, useState } from 'react'
import SessionLengthTooltip from '../../sessionLengthTooltip/SessionLengthTooltip'
 
function AverageSessionDuration({ userData }) {
    const [hoveredX, setHoveredX] = useState(0)
    const [isOverlayVisible, setIsOverlayVisible] = useState(0)
    const [graphicWidth, setGraphicWidth] = useState(0)
 
    const graphicRef = useRef()
 
    const handleMouseMove = (e) => {
        if (e && e.activeTooltipIndex) {
            setIsOverlayVisible(1)
            setHoveredX(e.activeCoordinate.x)
        } else {
            setHoveredX(0)
            setIsOverlayVisible(0)
        }
    }
 
    useEffect(() => {
        if (graphicRef.current) {
            setGraphicWidth(graphicRef.current.props.width)
        }
    }, [graphicRef.current])
 
    return (
        <Wrapper $height={ graphicWidth }>
            <ResponsiveContainer width="100%">
                <LineChart
                    data={ userData?.sessions }
                    style={{ backgroundColor: '#FF0000' }}
                    onMouseMove={ handleMouseMove }
                    ref={ graphicRef }
                    margin={{ top: 75, left: 10, right: 10, bottom: 30 }}
                >
                    <defs>
                        <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FFF" stopOpacity={ 0.4032 } />
                            <stop offset="100%" stopColor="#FFF" stopOpacity={ 1 } />
                        </linearGradient>
                    </defs>
 
                    <rect
                        x={ hoveredX }
                        y={ 0 }
                        width={ (graphicWidth - hoveredX) * isOverlayVisible }
                        height="100%"
                        fill="#e60000"
                    />
 
                    <XAxis dataKey="name" axisLine={ false } tickLine={ false } dy={ 20 } stroke='#ff8080' tickFormatter={ (i, index) => {
                        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
                        return days[index]
                    }} />
 
                    <YAxis hide={ true } />
                    <Tooltip content={<SessionLengthTooltip/>} />
 
                    <text
                        y="12%"
                        width={ 50 }
                        textAnchor="left"
                        dominantBaseline="middle"
                        fill='#ff8080'
                        style={{ fontSize: '1.2rem', fontFamily: 'Roboto' }}
                    >
                        <tspan x="12%" dy="1rem">Durée moyenne des</tspan>
                        <tspan x="12%" y="20%" dy="1rem">sessions</tspan>
                    </text>
 
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="url(#linearGradient)"
                        strokeWidth={ 2 }
                        dot={ false }
                        activeDot={{
                            stroke: '#ffffff',
                            strokeWidth: 2,
                            fill: '#fff',
                            r: 2
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}
 
export default AverageSessionDuration