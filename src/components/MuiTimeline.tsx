import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"


export const MuiTimeline = () => {
  return (
    <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>09:30am</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>04:30am</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>08:00am</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined"/>
                
            </TimelineSeparator>
            <TimelineContent>
                City C
            </TimelineContent>
        </TimelineItem>

    </Timeline>
  )
}
