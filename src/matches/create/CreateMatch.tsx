import React, { useEffect, useCallback } from 'react'
import { 
  Box, 
  Card, 
  CardBody, 
  Text, 
  Button, 
  Textarea,
  Grid, 
  GridItem,
  HStack,
  Badge,
  Heading,
  Progress,
  Flex
} from '@chakra-ui/react'
import { useForm } from './useForm'
import { useSubmit } from './useSubmit'
import { useToast } from '../../shared/hooks/useToast'

const CreateMatch: React.FC = () => {
  const { showError } = useToast()
  
  // Memoizar showError para evitar recreaciones
  const memoizedShowError = useCallback(showError, [])
  
  const {
    // Estado
    activeStep,
    formData,
    clubs,
    courts,
    schedules,
    
    // Acciones de carga
    loadClubs,
    
    // Handlers
    handleClubChange,
    handleCourtChange,
    handleDateChange,
    handleTimeChange,
    handleInputChange,
    handleNext,
    handleBack,
    
    // Getters
    getSelectedClub,
    getSelectedCourt,
    getSelectedSchedule
  } = useForm(memoizedShowError)

  const { submitMatch } = useSubmit()
  
  const steps = ['Seleccionar Club', 'Seleccionar Cancha', 'Seleccionar Día', 'Seleccionar Hora', 'Confirmar']

  // Cargar clubes al montar el componente
  useEffect(() => {
    loadClubs()
  }, [loadClubs])

  const onSubmit = async () => {
    try {
      await submitMatch(formData)
    } catch (error) {
      // El error ya se maneja en el hook con toast
    }
  }

  // Función para obtener los próximos días
  const getNextDays = () => {
    const days = []
    const today = new Date()
    const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    
    // Mostrar los próximos 7 días (incluyendo hoy)
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      const dayName = i === 0 ? 'Hoy' : dayNames[date.getDay()]
      const dayNumber = date.getDate()
      const monthName = monthNames[date.getMonth()]
      const dateString = date.toISOString().split('T')[0]
      
      days.push({
        date: dateString,
        dayName,
        dayNumber,
        monthName
      })
    }
    
    return days
  }

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box>
            <Heading size="md" mb={4}>
              Selecciona un club
            </Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
              {clubs.map((club) => (
                <GridItem key={club.id}>
                  <Card 
                    cursor="pointer"
                    border={formData.clubId === club.id ? "2px" : "1px"}
                    borderColor={formData.clubId === club.id ? "blue.500" : "gray.200"}
                    _hover={{ borderColor: "blue.300" }}
                    onClick={() => handleClubChange(club.id)}
                  >
                    <CardBody>
                      <Heading size="sm">{club.name}</Heading>
                      <Text fontSize="sm" color="gray.600">
                        {club.address}
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        {club.city}
                      </Text>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Box>
        )

      case 1:
        return (
          <Box>
            <Heading size="md" mb={4}>
              Selecciona una cancha en {getSelectedClub()?.name}
            </Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
              {courts.map((court) => (
                <GridItem key={court.id}>
                  <Card 
                    cursor="pointer"
                    border={formData.courtId === court.id ? "2px" : "1px"}
                    borderColor={formData.courtId === court.id ? "blue.500" : "gray.200"}
                    _hover={{ borderColor: "blue.300" }}
                    onClick={() => handleCourtChange(court.id)}
                  >
                    <CardBody>
                      <Heading size="sm">{court.name}</Heading>
                      <HStack spacing={2} mt={2}>
                        <Badge colorScheme="blue">{court.type}</Badge>
                        <Badge colorScheme="green">{court.surface}</Badge>
                      </HStack>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Box>
        )

      case 2:
        return (
          <Box>
            <Heading size="md" mb={4}>
              Selecciona el día para {getSelectedCourt()?.name}
            </Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
              {getNextDays().map((day) => (
                <GridItem key={day.date}>
                  <Card 
                    cursor="pointer"
                    border={formData.selectedDate === day.date ? "2px" : "1px"}
                    borderColor={formData.selectedDate === day.date ? "blue.500" : "gray.200"}
                    _hover={{ borderColor: "blue.300" }}
                    onClick={() => handleDateChange(day.date)}
                  >
                    <CardBody textAlign="center">
                      <Text fontSize="sm" color="gray.600" mb={1}>
                        {day.dayName}
                      </Text>
                      <Text fontSize="lg" fontWeight="bold">
                        {day.dayNumber}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {day.monthName}
                      </Text>
                    </CardBody>
                  </Card>
                </GridItem>
              ))}
            </Grid>
          </Box>
        )

      case 3:
        return (
          <Box>
            <Heading size="md" mb={4}>
              Selecciona el horario para {formData.selectedDate}
            </Heading>
            <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
              {schedules.map((schedule) => {
                const timeSlot = `${schedule.startTime}-${schedule.endTime}`
                return (
                  <GridItem key={schedule.id}>
                    <Card 
                      cursor="pointer"
                      border={formData.selectedTime === timeSlot ? "2px" : "1px"}
                      borderColor={formData.selectedTime === timeSlot ? "blue.500" : "gray.200"}
                      _hover={{ borderColor: "blue.300" }}
                      onClick={() => handleTimeChange(timeSlot)}
                    >
                      <CardBody>
                        <Heading size="sm">
                          {schedule.startTime} - {schedule.endTime}
                        </Heading>
                        <Text fontSize="2xl" color="blue.500" fontWeight="bold">
                          ${schedule.price}
                        </Text>
                      </CardBody>
                    </Card>
                  </GridItem>
                )
              })}
            </Grid>
          </Box>
        )

      case 4:
        return (
          <Box>
            <Heading size="md" mb={4}>
              Confirma los detalles de tu reserva
            </Heading>
            
            <Card mb={6}>
              <CardBody>
                <Heading size="sm" mb={4}>Detalles de la Reserva</Heading>
                <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={4}>
                  <GridItem>
                    <Text fontSize="sm" color="gray.600">Club:</Text>
                    <Text fontWeight="medium">{getSelectedClub()?.name}</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="sm" color="gray.600">Cancha:</Text>
                    <Text fontWeight="medium">{getSelectedCourt()?.name}</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="sm" color="gray.600">Fecha:</Text>
                    <Text fontWeight="medium">{formData.selectedDate}</Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="sm" color="gray.600">Horario:</Text>
                    <Text fontWeight="medium">
                      {formData.selectedTime}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text fontSize="sm" color="gray.600">Precio:</Text>
                    <Text fontSize="xl" color="blue.500" fontWeight="bold">
                      ${getSelectedSchedule()?.price || 0}
                    </Text>
                  </GridItem>
                </Grid>
              </CardBody>
            </Card>

            <Box>
              <Text mb={2} fontWeight="medium">Notas adicionales</Text>
              <Textarea
                value={formData.notes}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange('notes', e.target.value)}
                placeholder="Agrega cualquier información adicional..."
                rows={3}
                maxW="600px"
              />
            </Box>
          </Box>
        )

      default:
        return null
    }
  }

  return (
    <Box maxW="800px" mx="auto" p={6}>
      <Heading size="lg" mb={6}>
        Crear Nuevo Partido
      </Heading>

      {/* Progress Bar */}
      <Box mb={8}>
        <Flex justify="space-between" mb={2}>
          {steps.map((step, index) => (
            <Text 
              key={index}
              fontSize="sm" 
              color={index <= activeStep ? "blue.500" : "gray.500"}
              fontWeight={index === activeStep ? "bold" : "normal"}
            >
              {step}
            </Text>
          ))}
        </Flex>
        <Progress 
          value={(activeStep / (steps.length - 1)) * 100} 
          colorScheme="blue" 
          size="sm"
        />
      </Box>

      <Card>
        <CardBody>
          {renderStepContent()}
        </CardBody>
      </Card>

      <Flex justify="space-between" mt={6}>
        <Button
          isDisabled={activeStep === 0}
          onClick={handleBack}
          variant="outline"
        >
          Anterior
        </Button>
        
        {activeStep === steps.length - 1 ? (
          <Button
            colorScheme="blue"
            onClick={onSubmit}
            isDisabled={!formData.selectedDate || !formData.slotId}
          >
            Crear Partido
          </Button>
        ) : (
          <Button
            colorScheme="blue"
            onClick={handleNext}
            isDisabled={
              (activeStep === 0 && !formData.clubId) ||
              (activeStep === 1 && !formData.courtId) ||
              (activeStep === 2 && !formData.selectedDate) ||
              (activeStep === 3 && !formData.slotId)
            }
          >
            Siguiente
          </Button>
        )}
      </Flex>
    </Box>
  )
}

export default CreateMatch