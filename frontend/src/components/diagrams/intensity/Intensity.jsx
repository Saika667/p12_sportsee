import { Wrapper } from "./IntensityStyle"

function Intensity ({ userData }) {
    console.log(userData)
    return (
        <Wrapper>
            {/* <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer> */}
        </Wrapper>
    )
}

export default Intensity