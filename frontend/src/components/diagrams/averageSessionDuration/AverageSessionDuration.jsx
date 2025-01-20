import { XAxis, YAxis, Tooltip, CartesianGrid, Legend, LineChart, Line, ResponsiveContainer, Area, ComposedChart } from 'recharts'
import { Wrapper } from './AverageSessionDurationStyle'
import { useEffect, useRef, useState } from 'react'

function AverageSessionDuration ({ userData }) {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [graphicWidth, setGraphicWidth] = useState(null)

    const graphicRef = useRef()

    const handleMouseMove = (state) => {
        if (state && state.activeTooltipIndex !== undefined) {
            setHoveredIndex(state.activeTooltipIndex)
        }
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null)
    }

    useEffect(() => {
        if (graphicRef.current) {
            setGraphicWidth(graphicRef.current.container.clientWidth)
        }
    }, [graphicRef.current])
    
    return (
        <Wrapper className="statistic" $height={ graphicWidth }>
            <ResponsiveContainer width="100%">
                <LineChart
                    data={ userData?.sessions }
                    style={{ backgroundColor: '#FF0000' }}
                    onMouseMove={ handleMouseMove }
                    onMouseLeave={ handleMouseLeave }
                    ref={ graphicRef }
                    margin={{ top: 75, left: 10, right: 10, bottom: 30 }}
                >
                    <defs>
                        <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FFF" stopOpacity={ 0.4032 } />
                            <stop offset="100%" stopColor="#FFF" stopOpacity={ 1 } />
                        </linearGradient>
                    </defs>

                    { hoveredIndex !== null && (
                        <rect
                        x={ hoveredIndex * Math.floor(graphicWidth / userData.sessions.length) }
                        y={ 0 }
                        width={ graphicWidth - (hoveredIndex * (graphicWidth / userData.sessions.length)) }
                        height="100%"
                        fill="#e60000"
                        />
                    )}

                    <XAxis dataKey="name" axisLine={ false } tickLine={ false } dy={ 20 } stroke='#ff8080' tickFormatter={ (i, index) => {
                        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
                        return days[index]
                    }} />

                    <YAxis hide={ true } />
                    <Tooltip />

                    <text 
                        y="12%"
                        width={ 50 }
                        textAnchor="left" 
                        dominantBaseline="middle"
                        fill='#ff8080'
                        style={{ fontSize: '1rem', fontFamily: 'Roboto' }}
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