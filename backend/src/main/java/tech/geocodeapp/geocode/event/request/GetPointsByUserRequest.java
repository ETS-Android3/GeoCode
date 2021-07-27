package tech.geocodeapp.geocode.event.request;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import java.util.UUID;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * GetPointsByUserRequest
 */
@Validated
public class GetPointsByUserRequest {

    @JsonProperty( "userID" )
    private UUID userID = null;

    public GetPointsByUserRequest userID( UUID userID ) {

        this.userID = userID;
        return this;
    }

    /**
     * Get userID
     *
     * @return userID
     **/
    @Schema( required = true, description = "" )
    @NotNull

    @Valid
    public UUID getUserID() {

        return userID;
    }

    public void setUserID( UUID userID ) {

        this.userID = userID;
    }


    @Override
    public boolean equals( java.lang.Object o ) {

        if ( this == o ) {

            return true;
        }
        if ( o == null || getClass() != o.getClass() ) {

            return false;
        }
        GetPointsByUserRequest getPointsByUserRequest = ( GetPointsByUserRequest ) o;
        return Objects.equals( this.userID, getPointsByUserRequest.userID );
    }

    @Override
    public int hashCode() {

        return Objects.hash( userID );
    }

    @Override
    public String toString() {

        return "class GetPointsByUserRequest {\n" +
                "    userID: " + toIndentedString( userID ) + "\n" +
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
