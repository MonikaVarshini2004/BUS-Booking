# Bus Booking Application - Designing Phase Plan

This document outlines the design phase for the Bus Booking Application based on the provided project requirements. The goal is to establish a solid foundation before starting the development.

## User Review Required

> [!IMPORTANT]
> Please review the proposed **Database Schema** and **API Endpoints** to ensure they cover all functional requirements mentioned in your document.
> 
> I have assumed a **Spring Boot (Backend)** and **React (Frontend)** stack, consistent with modern web development patterns. If you prefer a different stack, please let me know.

## Proposed Design Components

### 1. System Architecture
A standard 3-tier architecture will be used:
- **Frontend**: React.js for a dynamic and responsive UI.
- **Backend**: Spring Boot (Java) for REST APIs and business logic.
- **Database**: PostgreSQL/MySQL for relational data storage.
- **Security**: JWT-based authentication for secure API access.
- **Notifications**: Integration with an Email Service (SMTP/SendGrid) for booking confirmations.

---

### 2. Database Design
The database will be normalized to ensure data integrity. Key entities include:
- `Users`: Authentication and profile details.
- `Buses`: Vehicle information (type, capacity).
- `Routes`: Source, destination, and path details.
- `Schedules`: Mapping buses to routes with specific timing and pricing.
- `Seats`: Real-time availability tracking for each schedule.
- `Bookings`: Linking users to their selected seats and schedules.

---

### 3. API Specification
RESTful endpoints to support:
- **Search**: `GET /api/search` (by source, destination, date).
- **Booking**: `POST /api/bookings` and `GET /api/bookings/{id}`.
- **Auth**: `POST /api/auth/login` and `POST /api/auth/register`.
- **Management**: Endpoints for bus and route details.

---

### 4. UI/UX Workflow
- **Home**: Search bars for Source/Destination/Date.
- **Listing**: Cards showing available buses, prices, and timings.
- **Seat Map**: Interactive grid for selecting seats.
- **Checkout**: Form for user details and confirmation.

---

### 5. Exception Handling & Logging
- **Centralized Handling**: Using `@ControllerAdvice` in Spring Boot for consistent error responses.
- **Logging**: Integrating SLF4J/Logback to log user actions, API hits, and errors.

## Open Questions

> [!NOTE]
> 1. Should we support multiple classes of buses (AC, Non-AC, Sleeper)?
> 2. Do you have a preferred Email Service Provider (e.g., Mailtrap for testing or Gmail SMTP)?
> 3. Should there be an Admin Dashboard in the initial version for managing buses and routes?

## Verification Plan

### Automated Tests
- Database normalization checks.
- API endpoint documentation validation.

### Manual Verification
- Reviewing wireframes/mockups for UI flow consistency.
- Validating the ERD against all functional requirements.
