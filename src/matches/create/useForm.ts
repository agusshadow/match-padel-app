import { useState, useCallback } from 'react'
import { getClubs, getCourtsByClub, getAvailableSlotsByCourtAndDay } from '../../api/entities'
import { Club, Court, CourtSchedule } from '../../types'

export interface CreateMatchForm {
  clubId: number | null
  courtId: number | null
  selectedDate: string
  selectedTime: string
  slotId: number | null
  notes: string
}

export const useForm = (onError?: (message: string) => void) => {
  
  const [activeStep, setActiveStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState<CreateMatchForm>({
    clubId: null,
    courtId: null,
    selectedDate: '',
    selectedTime: '',
    slotId: null,
    notes: ''
  })
  
  const [clubs, setClubs] = useState<Club[]>([])
  const [courts, setCourts] = useState<Court[]>([])
  const [schedules, setSchedules] = useState<CourtSchedule[]>([])

  const loadClubs = useCallback(async () => {
    try {
      setLoading(true)
      const clubsData = await getClubs()
      setClubs(clubsData)
    } catch (error) {
      console.error('Error loading clubs:', error)
      const errorMessage = 'Error al cargar los clubes'
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [onError])

  const loadCourts = useCallback(async (clubId: number) => {
    try {
      setLoading(true)
      const courtsData = await getCourtsByClub(clubId)
      setCourts(courtsData)
      // Limpiar selecciones posteriores
      setFormData(prev => ({
        ...prev,
        courtId: null,
        selectedDate: '',
        selectedTime: '',
        slotId: null
      }))
      setSchedules([])
    } catch (error) {
      console.error('Error loading courts:', error)
      const errorMessage = 'Error al cargar las canchas'
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [onError])

  const loadSchedules = useCallback(async (courtId: number) => {
    try {
      setLoading(true)
      const schedulesData = await getAvailableSlotsByCourtAndDay(courtId, 0)
      setSchedules(schedulesData)
      // Limpiar selecciones posteriores
      setFormData(prev => ({
        ...prev,
        selectedDate: '',
        selectedTime: '',
        slotId: null
      }))
    } catch (error) {
      console.error('Error loading schedules:', error)
      const errorMessage = 'Error al cargar los horarios'
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [onError])

  const loadAvailableSlots = useCallback(async (courtId: number, date: string) => {
    try {
      setLoading(true)
      // Convertir fecha a dayOfWeek (0 = Domingo, 1 = Lunes, etc.)
      const selectedDate = new Date(date)
      const dayOfWeek = selectedDate.getDay()
      
      const slotsData = await getAvailableSlotsByCourtAndDay(courtId, dayOfWeek)
      setSchedules(slotsData)
      // Limpiar selecciones posteriores
      setFormData(prev => ({
        ...prev,
        selectedTime: '',
        slotId: null
      }))
    } catch (error) {
      console.error('Error loading available slots:', error)
      const errorMessage = 'Error al cargar los horarios disponibles'
      setError(errorMessage)
      onError?.(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [onError])

  const handleClubChange = useCallback((clubId: number) => {
    setFormData(prev => ({ ...prev, clubId }))
    loadCourts(clubId)
    setActiveStep(1)
  }, [loadCourts])

  const handleCourtChange = useCallback((courtId: number) => {
    setFormData(prev => ({ ...prev, courtId }))
    loadSchedules(courtId)
    setActiveStep(2)
  }, [loadSchedules])

  const handleDateChange = useCallback((date: string) => {
    setFormData(prev => ({ ...prev, selectedDate: date }))
    // Cargar horarios disponibles para la cancha y fecha seleccionadas
    if (formData.courtId) {
      loadAvailableSlots(formData.courtId, date)
    }
    setActiveStep(3)
  }, [formData.courtId, loadAvailableSlots])

  const handleTimeChange = useCallback((timeSlot: string) => {
    const schedule = schedules.find(s => `${s.startTime}-${s.endTime}` === timeSlot)
    if (schedule) {
      setFormData(prev => ({
        ...prev,
        selectedTime: timeSlot,
        slotId: schedule.id
      }))
      setActiveStep(4)
    }
  }, [schedules])

  const handleInputChange = useCallback((field: keyof CreateMatchForm, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }, [])

  const handleNext = useCallback(() => {
    setActiveStep(prev => prev + 1)
  }, [])

  const handleBack = useCallback(() => {
    setActiveStep(prev => prev - 1)
  }, [])

  const getSelectedClub = useCallback(() => clubs.find(c => c.id === formData.clubId), [clubs, formData.clubId])
  const getSelectedCourt = useCallback(() => courts.find(c => c.id === formData.courtId), [courts, formData.courtId])
  const getSelectedSchedule = useCallback(() => schedules.find(s => s.id === formData.slotId), [schedules, formData.slotId])

  return {
    // Estado
    activeStep,
    loading,
    error,
    formData,
    clubs,
    courts,
    schedules,
    
    // Acciones de carga
    loadClubs,
    loadCourts,
    loadSchedules,
    loadAvailableSlots,
    
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
  }
}
