import React, { useCallback, useState } from "react";
import DayPicker, { DayModifiers } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { FiClock, FiPower } from "react-icons/fi";

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from "./styles";

import logoImg from "../../assets/logo.svg";
import { useAuth } from "../../context/AuthContext";

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img
              src="https://avatars.githubusercontent.com/u/39447921?s=460&v=4"
              alt="Thales"
            />
            <div>
              <span>Bem vindo</span>
              <strong>Thales</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>{" "}
          <p>
            <span>Hoje</span>
            <span>dia 6</span>
            <span>segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/39447921?s=460&v=4"
                alt="Thales"
              />
              <strong>Thales</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong> Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>
              <div>
                <img
                  src="https://avatars.githubusercontent.com/u/39447921?s=460&v=4"
                  alt="Thales"
                />
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong> Tarde</strong>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={["D", "S", "T", "Q", "Q", "S", "S"]}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
