import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, PolarAngleAxis, Pie, Cell } from "recharts"
import { Wrapper, Paragraph, TextContainer, Span } from "./ScoreStyle"
import { useEffect, useRef, useState } from "react"

function Score ({ userData }) {
    const [graphicWidth, setGraphicWidth] = useState(0)
    const graphicRef = useRef()

    const data = [
        { score: userData * 100 }
    ]

    useEffect(() => {
        if (graphicRef.current) {
            setGraphicWidth(graphicRef.current.props.width)
            console.log(graphicWidth)
        }
    }, [graphicRef.current])

    return (
        <>
        { userData !== undefined &&
        <Wrapper $height={ graphicWidth }>
            <ResponsiveContainer width="100%" minHeight={'250px'}>
                <RadialBarChart
                    cy="50%"
                    innerRadius={ 100 }
                    outerRadius={ 110 }
                    barSize={ 40 }
                    data={ data }
                    startAngle={ 90 }
                    endAngle={ 450 }
                    fill="#E60000"
                    ref={ graphicRef }
                >
                    <text
                        x="15%" 
                        y="10%" 
                        textAnchor="middle" 
                        dominantBaseline="middle"
                        fill='#20253A'
                        style={{ fontSize: '15px', fontFamily: 'Roboto' }}
                    >
                        Score
                    </text>
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={ 0 }
                        tick={ false }
                    />
                    <RadialBar
                        minAngle={ 15 }
                        clockWise
                        dataKey="score"
                        cornerRadius={ 10 }
                    />
                    <Legend
                        iconSize={ 10 }
                        layout="vertical"
                        verticalAlign="middle"
                        align="center"
                        content={() => (
                            <TextContainer>
                                <Span>{ `${ userData * 100 }%` }</Span>
                                <Paragraph>de&nbsp;votre objectif</Paragraph>
                            </TextContainer>
                        )}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </Wrapper>
        }
    </>
    )
}

export default Score 