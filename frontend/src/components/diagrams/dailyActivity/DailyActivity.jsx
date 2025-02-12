import { BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar, ResponsiveContainer, Legend } from 'recharts'
import CustomTooltip from "../../customTooltip/CustomTooltip"
import { Wrapper } from './DailyActivityStyle'

function DailyActivity ({ userData }) {
    return (
        <Wrapper>
            <ResponsiveContainer width="100%" minHeight={'250px'}>
                <BarChart 
                    data={ userData?.sessions } 
                    margin={{
                        top: 50,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <text
                        x="10%" 
                        y="10" 
                        textAnchor="middle" 
                        dominantBaseline="middle"
                        style={{ fontSize: '15px', fontFamily: 'Roboto' }}
                    >
                        Activité quotidienne
                    </text>
                    <Legend wrapperStyle={{ top:0 }} align="right" iconType="circle" iconSize={8} formatter={ (value, entry) => <span className="text">{value}</span> } />
                    <XAxis dataKey="day" stroke="#9B9EAC" strokeWidth={ 1 } dy={ 15 } tickLine={ false } tickFormatter={(i, index) => index + 1} />
                    <YAxis stroke="#9B9EAC" yAxisId="kilogram" axisLine={ false } dx={ 20 } tickLine={ false } tickCount={ 3 } domain={['dataMin - 1', '(dataMin + dataMax) / 2', 'dataMax']} orientation="right" />
                    <YAxis yAxisId="calories" axisLine={ false } tickLine={ false } tick={false} domain={['dataMin', 'dataMax']} />
                    <Tooltip content={<CustomTooltip />} />
                    <CartesianGrid stroke="#DEDEDE" strokeDasharray="3 1" vertical={ false } strokeWidth={ 1 } />
                    <Bar dataKey="kilogram" yAxisId="kilogram" name="Poids (kg)" fill="#282D30" barSize={5} radius={[5, 5, 0, 0]} />
                    <Bar dataKey="calories" yAxisId="calories" name="Calories brulées (kCal)" fill="#E60000" barSize={5} radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}

export default DailyActivity