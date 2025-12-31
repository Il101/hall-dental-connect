/**
 * API service for appointment scheduling
 */

export interface AppointmentRequest {
  name: string;
  email: string;
  phone?: string;
  service: string;
  preferredTime?: string;
  message?: string;
}

export interface AppointmentResponse {
  success: boolean;
  message: string;
}

/**
 * Handle appointment form submission
 */
export async function submitAppointment(
  data: AppointmentRequest
): Promise<AppointmentResponse> {
  // Simulate network delay
  const delay = 1000 + Math.random() * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  if (import.meta.env.DEV) {
    console.debug("Appointment submission:", data);
  }

  // Simulated validation/submission
  // In production this would connect to a backend service (e.g. Resend, Twilio)
  const shouldSucceed = Math.random() > 0.05;

  if (shouldSucceed) {
    return {
      success: true,
      message: "Appointment request received. We will contact you shortly.",
    };
  } else {
    return {
      success: false,
      message: "Failed to send request. Please try again or call us directly.",
    };
  }
}

/**
 * Real implementation example (for reference)
 * Uncomment and modify when connecting to a real backend
 */
/*
export async function submitAppointmentReal(
  data: AppointmentRequest
): Promise<AppointmentResponse> {
  try {
    const response = await fetch('/api/appointment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return {
      success: true,
      message: result.message || 'Appointment request received.',
    };
  } catch (error) {
    console.error('Appointment submission error:', error);
    return {
      success: false,
      message: 'Failed to send request. Please try again or call us directly.',
    };
  }
}
*/
