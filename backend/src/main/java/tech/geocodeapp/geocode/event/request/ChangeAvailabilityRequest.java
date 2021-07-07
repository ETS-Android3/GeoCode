package tech.geocodeapp.geocode.event.request;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.UUID;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * ChangeAvailabilityRequest
 */
@Validated
public class ChangeAvailabilityRequest {

    @JsonProperty( "eventID" )
    private UUID eventID = null;

    @JsonProperty( "availability" )
    private Boolean availability = null;

    public ChangeAvailabilityRequest eventID( UUID eventID ) {

        this.eventID = eventID;
        return this;
    }

    /**
     * Get eventID
     *
     * @return eventID
     **/
    @Schema( required = true, description = "" )
    @NotNull

    @Valid
    public UUID getEventID() {

        return eventID;
    }

    public void setEventID( UUID eventID ) {

        this.eventID = eventID;
    }

    public ChangeAvailabilityRequest availability( Boolean availability ) {

        this.availability = availability;
        return this;
    }

    /**
     * Get availability
     *
     * @return availability
     **/
    @Schema( required = true, description = "" )
    @NotNull

    public Boolean isAvailability() {

        return availability;
    }

    public void setAvailability( Boolean availability ) {

        this.availability = availability;
    }


    @Override
    public boolean equals( java.lang.Object o ) {

        if ( this == o ) {

            return true;
        }
        if ( o == null || getClass() != o.getClass() ) {

            return false;
        }
        ChangeAvailabilityRequest changeAvailabilityRequest = ( ChangeAvailabilityRequest ) o;
        return Objects.equals( this.eventID, changeAvailabilityRequest.eventID ) &&
                Objects.equals( this.availability, changeAvailabilityRequest.availability );
    }

    @Override
    public int hashCode() {

        return Objects.hash( eventID, availability );
    }

    @Override
    public String toString() {

        return "class ChangeAvailabilityRequest {\n" +
                "    eventID: " + toIndentedString( eventID ) + "\n" +
                "    availability: " + toIndentedString( availability ) + "\n" +
                "}";
    }

    /**
     * Convert the given object to string with each line indented by 4 spaces
     * (except the first line).
     */
    private String toIndentedString( java.lang.Object o ) {

        if ( o == null ) {

            return "null";
        }
        return o.toString().replace( "\n", "\n    " );
    }

}
