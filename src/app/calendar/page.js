"use client"; // Ensure this runs as a Client Component
import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Modal, Breadcrumb, DatePicker, Flex, Tag, Typography, Popover, Space } from "antd";
import { LeftOutlined, RightOutlined, PlusOutlined, DownOutlined, EllipsisOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import isToday from "dayjs/plugin/isToday";

dayjs.extend(weekday);
dayjs.extend(isToday);

const Title = Typography.Title;
const SLOT_HEIGHT = 60;
const calendarStartTime = dayjs("00:00", "HH:mm");

const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
const weekdays = Array.from({ length: 7 }, (_, i) =>
  dayjs().weekday(i).format("YYYY-MM-DD")
);

const events = [
    {
      date: "2025-05-09",
      timeStart: "3:00",
      timeEnd: "5:30",
      title: "Motivational message for Sarah's Team",
      tag: "Special request",
    },
    {
      date: "2025-05-07",
      timeStart: "9:00",
      timeEnd: "12:00",
      title: "Team Meeting",
      tag: "Important",
    },
    {
      date: "2025-05-08",
      timeStart: "4:00",
      timeEnd: "5:00",
      title: "Design Review",
      tag: "Urgent",
    },
    {
        date: "2025-05-15",
        timeStart: "3:00",
        timeEnd: "6:00",
        title: "Testing data by Hiran Karu",
        tag: "Special request",
    },
  ];
   

export default function CalendarPage() {
    const [currentDate, setCurrentDate] = useState(dayjs("2025-05-06"));
    const [modalInfo, setModalInfo] = useState(null);
    const startOfWeek = currentDate.startOf("week").add(1, "day");

    const onDatePick = (value) => setCurrentDate(value.startOf("week").add(1, "day"));
    const goPrevWeek = () => setCurrentDate(currentDate.subtract(7, "day"));
    const goNextWeek = () => setCurrentDate(currentDate.add(7, "day"));
    const goToday = () => setCurrentDate(dayjs().startOf("week").add(1, "day"));

    const getEvent = (day, hour) => {
        const eventsForDay = events.filter((event) =>
        dayjs(event.date).isSame(day, "day")
        );

        return eventsForDay.find((event) => {
        const start = dayjs(`${event.date} ${event.timeStart}`);
        const end = dayjs(`${event.date} ${event.timeEnd}`);
        const current = dayjs(`${day} ${hour}:00`);
        return current.isSame(start, "hour");
        });
    };

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkSize = () => setIsMobile(window.innerWidth <= 1100);
        checkSize();
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    const toolbarButtons = (
        <Space direction={isMobile ? "vertical" : "horizontal"}>
          <Button onClick={goToday}>Today</Button>
          <Button icon={<LeftOutlined />} onClick={goPrevWeek} />
          <Button icon={<RightOutlined />} onClick={goNextWeek} />
          <DatePicker
            value={dayjs(currentDate)}
            onChange={onDatePick}
            picker="date"
            format="MMMM YYYY"
            suffixIcon={<DownOutlined />}
            allowClear={false}
            className="calendar-datepicker"
          />
          <Button icon={<PlusOutlined />} type="primary" onClick={() => setModalInfo({})}>
            Create new event
          </Button>
        </Space>
    );

    return (
        <>  
            <div className="my-calendar">

                <Flex className="inner-header-bar-common" style={{ flexDirection: 'column' }}>  
                    <Breadcrumb
                        items={[
                            {
                                title: <a href="/">Profile</a>,
                            },
                            {
                                title: 'My calendar',
                            }
                        ]}
                    />

                     <Row align="bottom">
                        <Col span={20}>
                            <Flex className="sub-title" style={{ flexDirection: 'column' }}>
                                <Title level={4} style={{ marginBottom: 0 }}>My calendar</Title>
                                <label>Manage your schedules to update your availability.</label>
                            </Flex>
                        </Col>
                        <Col span={4} style={{ justifyItems: 'flex-end' }}>

                            <div className="calendar-toolbar">
                                {isMobile ? (
                                <Popover placement="bottomRight" overlayClassName="calendar-toolbar-popover" content={toolbarButtons} trigger="click">
                                    <Button type="default" variant="outlined" shape="circle" icon={<EllipsisOutlined />} size="large" />
                                </Popover>
                                ) : (
                                toolbarButtons
                                )}
                            </div>

                            {/* <div className="calendar-toolbar">
                                <Button onClick={goToday}>Today</Button>
                                <Button icon={<LeftOutlined />} onClick={goPrevWeek} />
                                <Button icon={<RightOutlined />} onClick={goNextWeek} />
                                <DatePicker
                                    value={dayjs(currentDate)} 
                                    onChange={onDatePick}
                                    picker="date"
                                    format="MMMM YYYY"
                                    suffixIcon={<DownOutlined />}
                                    allowClear={false}
                                    className="calendar-datepicker"
                                />
                                
                                <Button icon={<PlusOutlined />} type="primary" onClick={() => setModalInfo({ })}>
                                    Create new event
                                </Button>
                            </div> */}
                        </Col>
                     </Row>
                </Flex>

                <div className="container-fluid">
                    <Row gutter={[30, 0]}>
                        <Col span={24}>
                            
                            <div className="calendar-scroll-wrapper">
                            
                                <div style={{ minWidth: 1000 }}>
                                    {/* Header Row */}
                                    <Row className='calendar-date-header'>
                                        <Col flex="79px" className="slot-blank" />

                                        {Array.from({ length: 7 }).map((_, i) => {
                                        const date = startOfWeek.add(i, "day");
                                        return (
                                            <Col
                                                flex="1"
                                                key={i}
                                                className={`calendar-date-cell ${date.isToday() ? "today-cell" : ""}`}
                                            >   
                                                <div className="holder">
                                                    <label className="lbl-date">{date.format("DD")}</label>
                                                    <label className="lbl-day">{date.format("dddd")}</label>
                                                </div>
                                                
                                            </Col>
                                        );
                                        })}
                                    </Row>

                                    {/* Time Slots */}
                                    {hours.map((hour) => (
                                        <Row className='calendar-slot' key={hour} style={{ minHeight: SLOT_HEIGHT }}>
                                        <Col flex="80px" className="slot-blank">
                                            {hour}
                                        </Col>
                                        {Array.from({ length: 7 }).map((_, i) => {
                                            const date = startOfWeek.add(i, "day").format("YYYY-MM-DD");
                                            const event = getEvent(date, hour);
                                            return (
                                            <Col
                                                className={`calendar-column ${event ? "event-cell" : ""}`}
                                                flex="1"
                                                key={i}
                                                onClick={() => setModalInfo({ date, hour })}
                                                style={{
                                                    minHeight: SLOT_HEIGHT,
                                                    cursor: "pointer",
                                                }}
                                            >
                                                {event && (
                                                <>
                                                    <div className="event-content">
                                                        <Tag className="primary">{event.tag}</Tag>
                                                        <label>{event.title}</label>
                                                        {/* <div>{event.timeStart} - {event.timeEnd}</div> */}
                                                    </div>
                                                   
                                                </>
                                                )}
                                            </Col>
                                            );
                                        })}
                                        </Row>
                                    ))}
                                </div>

                            </div>

                        <Modal
                            open={!!modalInfo}
                            onCancel={() => setModalInfo(null)}
                            title="Add Event"
                            footer={null}
                        >
                            <p>Date: {modalInfo?.date}</p>
                            <p>Hour: {modalInfo?.hour}</p>
                        </Modal>


                        </Col>
                    </Row>
                </div>

            </div>
        </>

    );
  
}