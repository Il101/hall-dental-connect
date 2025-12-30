/**
 * API adapter for appointment form submission
 * Currently mocked - replace with real implementation
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
 * Mocked appointment submission
 * Simulates network delay and randomly succeeds/fails for testing
 * 
 * TODO: Replace with real implementation using Resend
 * 
 * Real implementation would:
 * 1. Call an edge function endpoint: /api/appointment
 * 2. The edge function would use Resend to:
 *    - Send notification email to CLINIC_NOTIFICATION_EMAIL
 *    - Send confirmation email to the user
 * 
 * Required environment variables:
 * - RESEND_API_KEY
 * - CLINIC_NOTIFICATION_EMAIL (e.g., "appointments@zahnarztpraxis-tirol.at")
 * - FROM_EMAIL (e.g., "noreply@zahnarztpraxis-tirol.at")
 */
export async function submitAppointment(
  data: AppointmentRequest
): Promise<AppointmentResponse> {
  // Simulate network delay (1-2 seconds)
  const delay = 1000 + Math.random() * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Log the submission for development
  console.log("[Mock API] Appointment submission:", data);

  // Simulate 95% success rate for testing
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
